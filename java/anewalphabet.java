import java.util.Scanner;

public class anewalphabet {
	static final String[] translated = { "@", "8", "(", "|)", "3", "#", "6", "[-]", "|", "_|", "|<", "1", "[]\\/[]",
			"[]\\[]", "0", "|D", "(,)", "|Z", "$", "']['", "|_|", "\\/", "\\/\\/", "}{", "`/", "2" };

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine();
		StringBuilder sb = new StringBuilder(input.length());
		for (char ch : input.toCharArray())
			if (Character.isLetter(ch))
				sb.append(translated[Character.toLowerCase(ch) - 'a']);
			else
				sb.append(ch);
		System.out.println(sb);
		scan.close();
	}
}
