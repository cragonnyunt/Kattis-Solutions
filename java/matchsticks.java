import java.util.Scanner;

public class matchsticks {
	static String[] smallest = new String[99];
	static {
		smallest[0] = "1";
		smallest[1] = "7";
		smallest[2] = "4";
		smallest[3] = "2";
		smallest[4] = "6";
		smallest[5] = "8";
		smallest[6] = "10";
		smallest[7] = "18";
		smallest[8] = "22";
		smallest[9] = "20";
		smallest[10] = "28";
		smallest[11] = "68";
		smallest[12] = "88";
		smallest[13] = "108";
		smallest[14] = "188";
		smallest[15] = "200";
		for (int i = 16; i < smallest.length; i++)
			smallest[i] = smallest[i - 7] + "8";
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		while (T-- > 0) {
			int number = scan.nextInt();
			int length = number / 2;
			StringBuilder largest = new StringBuilder(length);
			for (int i = 0; i < length; i++)
				largest.append("1");
			if (number % 2 != 0)
				largest.setCharAt(0, '7');
			System.out.println(smallest[number - 2] + " " + largest);
		}
		scan.close();
	}
}
