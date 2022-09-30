package variables;

public class Variable
{
    public static void main(String[] args)
    {
        boolean one = true;
        char two = 100; //will print ASCII value, which is d in this case
        byte three = 100;
        short four = 1000;
        int five = 1;
        long six = 100000L;
        float seven = 234.5F;
        double eight = 123.4;
        final double PI = 3.14; //final variable cannot be reassigned
        //PI = 3.1415926536;

        System.out.println(one);
        System.out.println(two);
        System.out.println(three);
        System.out.println(four);
        System.out.println(five);
        System.out.println(six);
        System.out.println(seven);
        System.out.println(eight);
        System.out.print(PI);
    }
}
