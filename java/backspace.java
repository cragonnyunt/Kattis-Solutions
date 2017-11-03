import java.util.Scanner;

public class backspace {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String line = scan.nextLine();
		StringBuilder sb = new StringBuilder(line.length() / 2);
		for (char c : line.toCharArray()) {
			if (c == '<')
				sb.deleteCharAt(sb.length() - 1);
			else
				sb.append(c);
		}
		System.out.println(sb);
		scan.close();
	}
}
