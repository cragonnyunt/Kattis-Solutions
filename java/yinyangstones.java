import java.util.Scanner;

public class yinyangstones {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String stones = scan.next();
		if (stones.length() % 2 == 1)
			System.out.println("0");
		else {
			int WCount = 0, BCount = 0;
			for (char c : stones.toCharArray())
				if (c == 'W')
					WCount++;
				else
					BCount++;
			System.out.println(WCount == BCount ? "1" : "0");
		}
		scan.close();
	}
}
