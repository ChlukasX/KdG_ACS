package comparingstrings;

public class ComparingStrings
{
    public static void main(String[] args)
    {
        String stringOne = "java";
        String stringTwo = "Jakarta";
        String stringThree = "JAVA";

        if (stringOne.compareToIgnoreCase(stringTwo) == 0){
            System.out.println(stringOne + " is equal to " + stringTwo);}
        else if(stringOne.compareToIgnoreCase(stringTwo) != 0){
            System.out.println(stringOne + " is not equal to " + stringTwo);}

        if (stringTwo.compareToIgnoreCase(stringThree) == 0){
            System.out.println(stringTwo + " is equal to " + stringThree);}
        else if (stringTwo.compareToIgnoreCase(stringThree) != 0){
            System.out.println(stringTwo + " is not equal to " + stringThree);}

        if (stringOne.compareToIgnoreCase(stringThree) == 0){
            System.out.print(stringOne + " is equal to " + stringThree);}
        else if (stringTwo.compareToIgnoreCase(stringThree) != 0){
            System.out.println(stringOne + " is not equal to " + stringThree);}
    }
}


