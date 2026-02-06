package com.example.auth.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();

        // Allow your frontend domain
        config.setAllowedOrigins(
                Arrays.asList("https://user-student-web-app.onrender.com")
        );

        // Allow HTTP methods
        config.setAllowedMethods(
                Arrays.asList("GET","POST","PUT","DELETE","OPTIONS")
        );

        // Allow headers
        config.setAllowedHeaders(Arrays.asList("*"));

        // Allow credentials (important for auth)
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();

        source.registerCorsConfiguration("/**", config);

        return source;
    }
}
