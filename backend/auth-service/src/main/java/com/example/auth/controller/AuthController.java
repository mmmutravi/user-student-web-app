package com.example.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.auth.entity.User;
import com.example.auth.repository.UserRepository;
import com.example.auth.security.JwtUtil;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {


    @Autowired
    private UserRepository repo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtil jwtUtil;

    // REGISTER
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        repo.save(user);
        return "User Registered";
    }

    // LOGIN → RETURN JWT TOKEN
    @PostMapping("/login")
    public String login(@RequestBody User requestUser) {

        User dbUser = repo.findByUsername(requestUser.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(requestUser.getPassword(), dbUser.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        // ✅ GENERATE JWT TOKEN
        String token = jwtUtil.generateToken(
                dbUser.getUsername(),
                dbUser.getRole()
        );

        // ✅ RETURN TOKEN
        return token;
    }
}
