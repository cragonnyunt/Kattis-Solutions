import java.util.Arrays;
import java.util.Scanner;

public class thebackslashproblem {
	static char[] escCh = new char[13];

	static {
		char ch = '!';
		for (int i = 0; i < 10; i++)
			escCh[i] = ch++;
		ch = '[';
		for (int i = 10; i < escCh.length; i++)
			escCh[i] = ch++;
	}

	static String getEscaped(String str, int lvl) {
		if (lvl == 0)
			return str;
		StringBuilder sb = new StringBuilder();
		for (char ch : str.toCharArray()) {
			if (Arrays.binarySearch(escCh, ch) >= 0)
				sb.append('\\');
			sb.append(ch);
		}
		return getEscaped(sb.toString(), lvl - 1);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextInt()) {
			int n = scan.nextInt();
			scan.nextLine();
			String s = scan.nextLine();
			System.out.println(getEscaped(s, n));
		}
		scan.close();
	}
}
