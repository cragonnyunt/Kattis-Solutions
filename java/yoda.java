import java.util.Arrays;
import java.util.Scanner;

public class yoda {
	static String padZeros(String str, int length) {
		char[] zeros = new char[length];
		Arrays.fill(zeros, '0');
		return (new String(zeros) + str).substring(str.length());
	}

	static String collide(String str1, String str2)
    {
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < str1.length(); i++)
        {
            int _s = Character.getNumericValue(str1.charAt(i));
            int _o = Character.getNumericValue(str2.charAt(i));
            if (_s >= _o)
                sb.append(_s);
        }
        String s = sb.toString();
        if (s.isEmpty())
            return "YODA";
        else
        {
        	s = s.replaceFirst("^0+(?!$)", "");
            if (s.isEmpty())
                return "0";
            else
                return s;
        }
    }

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String N = scan.next();
		String M = scan.next();
		int length = Math.max(N.length(), M.length());
		N = padZeros(N, length);
		M = padZeros(M, length);
		System.out.println(collide(N, M));
		System.out.println(collide(M, N));
		scan.close();
	}
}
