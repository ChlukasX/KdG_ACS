package welcome;

import java.util.Scanner;

public class Welcome
{
    public static void main(String[] args)
    {
        String name;

        Scanner keyboard;
        keyboard = new Scanner(System.in);
        System.out.print("What is your name? ");
        name = keyboard.nextLine();
        System.out.print("welcome.Welcome " + name + "!");
    }
}
