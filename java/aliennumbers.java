import java.util.Scanner;

public class aliennumbers {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		for (int i = 1; i <= T; i++) {
			String alien_number = scan.next();
			String source_lang = scan.next();
			String target_lang = scan.next();
			int toBase10 = 0;
			for (int j = 0; j < alien_number.length(); j++)
				toBase10 += source_lang.indexOf(alien_number.charAt(j))
						* Math.pow(source_lang.length(), alien_number.length() - j - 1);
			StringBuilder translated_number = new StringBuilder();
			while (toBase10 > 0) {
				int d = toBase10 % target_lang.length();
				translated_number.insert(0, target_lang.charAt(d));
				toBase10 /= target_lang.length();
			}
			System.out.printf("Case #%d: %s%n", i, translated_number);
		}
		scan.close();
	}
}
