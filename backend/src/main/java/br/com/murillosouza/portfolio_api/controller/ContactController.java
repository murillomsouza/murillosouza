package br.com.murillosouza.portfolio_api.controller;

import br.com.murillosouza.portfolio_api.dto.ContactDTO;
import br.com.murillosouza.portfolio_api.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = {"http://localhost:5173", "https://murillosouza.vercel.app"})
@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final EmailService emailService;

    public ContactController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<String> sendEmail(@Valid @RequestBody ContactDTO contactDTO) {
        try {
            emailService.sendContactEmail(contactDTO);
            return ResponseEntity.ok("Mensagem enviada com sucesso!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Erro ao enviar mensagem: " + e.getMessage());
        }
    }
}