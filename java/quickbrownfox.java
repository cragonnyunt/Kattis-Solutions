import java.util.ArrayList;
import java.util.Scanner;

public class quickbrownfox {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		scan.nextLine();
		while (N-- > 0) {
			String pangram = scan.nextLine();
			ArrayList<Character> alphabets = new ArrayList<>();
			for (char c = 'a'; c <= 'z'; c++)
				alphabets.add(c);
			for (char c : pangram.toLowerCase().toCharArray())
				alphabets.remove((Object) c);
			if (alphabets.isEmpty())
				System.out.println("pangram");
			else {
				StringBuilder sb = new StringBuilder();
				for (char c : alphabets)
					sb.append(c);
				System.out.printf("missing %s", sb);
			}
		}
		scan.close();
	}
}
