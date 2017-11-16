import java.util.Scanner;

public class conundrum {
	static final String letter = "PER";

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String chipertext = scan.next();
		int index = 0, count = 0;
		for (char c : chipertext.toCharArray())
			if (c != letter.charAt(index++ % 3))
				count++;
		System.out.println(count);
		scan.close();
	}
}
