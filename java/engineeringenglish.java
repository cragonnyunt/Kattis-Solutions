import java.util.HashSet;
import java.util.Scanner;

public class engineeringenglish {
	static final HashSet<String> _words = new HashSet<String>();

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		StringBuilder sb = new StringBuilder();
		while (scan.hasNext()) {
			String input = scan.next();
			if (_words.contains(input.toLowerCase())) {
				sb.append(". ");
			} else {
				sb.append(input + " ");
				_words.add(input.toLowerCase());
			}
		}
		System.out.println(sb);
		scan.close();
	}
}
