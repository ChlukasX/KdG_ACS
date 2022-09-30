package numbersv2;

public class NumbersV2_2
{
    public static void main(String[] args)
    {
        //part 3
        int first = 8;
        int second = 5;

        System.out.println(first + second);
        System.out.println(second - first);
        System.out.println(first * second);
        System.out.println(first / second);
        System.out.println(first % second);
        System.out.println("");

        //part 4
        int result;
        System.out.println(result = ++first); //increment and return, plus 1 (8 + 1 = 9, prints 9)
        System.out.println(result = first++); //return then increment, plus 1 (9 + 1 = 10, but prints 9)
        System.out.println(result = --second); //increment and then return, minus 1 (5 - 1 = 4, prints 4)
        System.out.println(result = second--); //return then increment, minus 1 (4 - 1 = 3, but prints 4)
    }
}
