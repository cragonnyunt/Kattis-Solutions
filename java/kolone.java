import java.util.Scanner;

public class kolone {
	static String getReverseString(String str) {
		return new StringBuilder(str).reverse().toString();
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int ant1_length = scan.nextInt();
		int ant2_length = scan.nextInt();
		String ant1 = scan.next();
		String ant2 = scan.next();
		int pos = scan.nextInt();
		if (pos >= ant1_length + ant2_length)
			System.out.println(ant2 + getReverseString(ant1));
		else {
			StringBuilder sb = new StringBuilder(getReverseString(ant1) + ant2);
			for (int i = 0; i < ant1.length() && i < pos; i++) {
				int index = Math.min(sb.length() - i - 1, ant1.length() + pos - 2 * i - 1);
				sb.setCharAt(index, ant1.charAt(i));
			}
			for (int i = 0; i < ant2.length() && i < pos; i++) {
				int index = Math.max(i, ant1.length() - pos + 2 * i);
				sb.setCharAt(index, ant2.charAt(i));
			}
			System.out.println(sb);
		}
		scan.close();
	}
}
