package stringmanipulation;

import java.util.*;

public class StringManipulation
{
    public static void main(String[] args)
    {
        Scanner keyboard = new Scanner(System.in);
        System.out.print("Please enter a sentence: ");
        String sentence = keyboard.nextLine();

        System.out.println(sentence.toUpperCase());
        System.out.println(sentence.toLowerCase());
        System.out.println(sentence.replace("a","o"));
        System.out.println(sentence.length());
        System.out.println(sentence.charAt(0));
        System.out.println(sentence.charAt(sentence.length()- 1));
        System.out.println(sentence.length() - sentence.replace("e", "").length());
    }
}
