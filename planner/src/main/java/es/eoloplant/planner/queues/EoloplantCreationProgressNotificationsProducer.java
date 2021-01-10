package es.eoloplant.planner.queues;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.eoloplant.planner.models.EoloplantProgressNotification;

@Component
public class EoloplantCreationProgressNotificationsProducer {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendMessage(EoloplantProgressNotification eoloplantProgressNotification) {

        String data = eoloplantProgressNotification.getJSONString();

        System.out.println("publishToQueue: '" + data + "'");

        sleep();

        rabbitTemplate.convertAndSend("eoloplantCreationProgressNotifications", data);
    }

    private void sleep() {
        try {
            Thread.sleep(getRandomNumber());
        } catch (InterruptedException exception) {
            exception.printStackTrace();
        }
    }

    private int getRandomNumber() {
        int min = 1500;
        int max = 3000;
        return (int) ((Math.random() * (max - min)) + min);
    }
}
