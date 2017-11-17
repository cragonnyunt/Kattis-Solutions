import java.util.Scanner;

public class kemija08 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNext()) {
			String s = scan.next();
			for (char c : new char[] { 'a', 'e', 'i', 'o', 'u' })
				s = s.replaceAll(String.format("%cp%c", c, c), String.valueOf(c));
			System.out.printf("%s ", s);
		}
		scan.close();
	}
}
