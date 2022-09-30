package age;

import java.util.Scanner;
import java.time.LocalDate;

public class Age
{
    public static void main(String[] args)
    {
        Scanner keyboard;
        keyboard = new Scanner(System.in);

        System.out.print("What is your name: ");
        String name = keyboard.next();
        System.out.print("Dear " + name + " please enter the year you where born: ");
        int bornin = keyboard.nextInt();

        int year = LocalDate.now().getYear();
        int age = year - bornin;
        System.out.print("If all goes well you'll be " + age + " by the end of the year." );
    }
}
