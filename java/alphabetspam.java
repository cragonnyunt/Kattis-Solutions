import java.util.Scanner;

public class alphabetspam {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.next();
		double count = input.length();
		int ct_whitespace = 0;
		int ct_lowercase = 0;
		int ct_uppercase = 0;
		int ct_symbol = 0;
		for (int i = 0; i < input.length(); i++) {
			boolean isSymbol = true;
			if (input.charAt(i) == '_') {
				ct_whitespace++;
				isSymbol = false;
			}
			if (Character.isLowerCase(input.charAt(i))) {
				ct_lowercase++;
				isSymbol = false;
			}
			if (Character.isUpperCase(input.charAt(i))) {
				ct_uppercase++;
				isSymbol = false;
			}
			if (isSymbol)
				ct_symbol++;
		}
		System.out.println(ct_whitespace / count);
		System.out.println(ct_lowercase / count);
		System.out.println(ct_uppercase / count);
		System.out.println(ct_symbol / count);
		scan.close();
	}
}
