import java.util.Scanner;

public class sevenwonders {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String cards = scan.next();
		int T = 0, C = 0, G = 0;
		for (char c : cards.toCharArray())
			switch (c) {
			case 'T':
				T++;
				break;
			case 'C':
				C++;
				break;
			default:
				G++;
				break;
			}
		System.out.println(T * T + C * C + G * G + 7 * Math.min(Math.min(T, C), G));
		scan.close();
	}
}
