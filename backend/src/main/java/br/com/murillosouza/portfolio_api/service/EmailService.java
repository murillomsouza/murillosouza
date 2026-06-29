package br.com.murillosouza.portfolio_api.service;

import br.com.murillosouza.portfolio_api.dto.ContactDTO;
import com.resend.Resend;
import com.resend.services.emails.model.SendEmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Value("${RESEND_API_KEY}")
    private String apiKey;

    @Value("${MY_EMAIL_RECEIVER}")
    private String toEmail;

    public void sendContactEmail(ContactDTO contactDTO) {
        Resend resend = new Resend(apiKey);

        SendEmailRequest params = SendEmailRequest.builder()
                .from("onboarding@resend.dev")
                .to(toEmail)
                .subject("Novo Contato do Portfólio - " + contactDTO.name())
                .html("<strong>Nome:</strong> " + contactDTO.name() + "<br>" +
                        "<strong>E-mail:</strong> " + contactDTO.email() + "<br><br>" +
                        "<strong>Mensagem:</strong><br>" + contactDTO.message())
                .build();

        try {
            resend.emails().send(params);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao enviar e-mail via API REST: " + e.getMessage());
        }
    }
}