import java.util.Scanner;

public class cokolada {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int K = scan.nextInt();
		int breaks = 0;
		int pow = 0;
		boolean toCount = false;
		while (K > 0) {
			if (K % 2 == 1)
				toCount = true;
			if (toCount)
				breaks++;
			pow++;
			K /= 2;
		}
		if (breaks == 1) {
			pow--;
			breaks = 0;
		}
		System.out.printf("%d %d", (int) Math.pow(2, pow), breaks);
		scan.close();
	}
}
