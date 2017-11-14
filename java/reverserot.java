import java.util.Scanner;

public class reverserot {
	static char[] scheme;
	static {
		scheme = new char[28];
		for (int i = 0; i < 26; i++)
			scheme[i] = (char) ('A' + i);
		scheme[26] = '_';
		scheme[27] = '.';
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N;
		while ((N = scan.nextInt()) != 0) {
			StringBuilder msg = new StringBuilder(scan.next()).reverse();
			StringBuilder result = new StringBuilder();
			for (char c : msg.toString().toCharArray())
				for (int i = 0; i < scheme.length; i++)
					if (scheme[i] == c) {
						result.append(scheme[(i + N) % 28]);
						break;
					}
			System.out.println(result);
		}
		scan.close();
	}
}
