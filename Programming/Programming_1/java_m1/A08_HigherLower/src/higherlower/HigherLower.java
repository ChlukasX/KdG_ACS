package higherlower;

import java.util.Scanner;
import java.util.Random;

public class HigherLower
{
    public static void main(String[] args)
    {
        Random randomGenerator = new Random();
        int secret = randomGenerator.nextInt(100);
        String enter = "Enter a number: ";
        Scanner keyboard = new Scanner(System.in);

        System.out.print(enter);
        int guess = keyboard.nextInt();
        int counter = 1;

        while (guess != secret)
        {
            if (guess > secret){
                System.out.print("Lower! " + enter);
                guess = keyboard.nextInt();}
            else if (guess < secret){
                System.out.print("Higher! " + enter);
                guess = keyboard.nextInt();}
            counter++;
        }
        System.out.println("Congratulations, your guess is correct!");
        System.out.print("Guesses needed: " + counter);
    }
}
