import java.util.Random;
import java.util.Scanner;

public class esej {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int A = scan.nextInt();
		int B = scan.nextInt();
		Random rnd = new Random();
		int wordCount;
		do {
			wordCount = A + rnd.nextInt(B - A + 1);
		} while (wordCount < B / 2);
		for (int i = 0; i < wordCount; i++) {
			int wordLength = 1 + rnd.nextInt(15);
			StringBuilder sb = new StringBuilder(wordLength);
			for (int j = 0; j < wordLength; j++)
				sb.append((char) ('a' + rnd.nextInt(26)));
			sb.append(" ");
			System.out.print(sb);
		}
		scan.close();
	}
}
