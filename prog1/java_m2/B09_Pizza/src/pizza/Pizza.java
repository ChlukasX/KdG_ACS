package pizza;

import java.util.Scanner;

public class Pizza
{
    public static void main(String[] args) {
        int pizza = 800;
        int topping = 50;
        int count = 0;
        Scanner keyboard = new Scanner(System.in);

        System.out.print("How many pizzas do you want? ");
        int amount = keyboard.nextInt();

        int sum = 0;
        while (count != amount) {
            System.out.print("How many extra toppings for pizza " + (count + 1) + " ");
            int topamount = keyboard.nextInt();

            int sum1 = (topamount * topping) + pizza;
            sum = sum + sum1;

            count++;
        }
        float newsum = sum / (float) 100;
        System.out.print("Total price: " + newsum);
    }
}
