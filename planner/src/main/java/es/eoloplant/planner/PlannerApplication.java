package es.eoloplant.planner;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PlannerApplication {

    public static void main(String[] args) {
        SpringApplication.run(PlannerApplication.class, args);
    }

    @Bean
    public Queue createEoloplantRequestsQueue() {
        return new Queue("eoloplantCreationRequests", false);
    }

    @Bean
    public Queue createEoloplantProgressQueue() {
        return new Queue("eoloplantCreationProgressNotifications", false);
    }


    @Bean
    public Jackson2JsonMessageConverter converter() {
        return new Jackson2JsonMessageConverter();
    }

}
