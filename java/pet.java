import java.util.Scanner;

public class pet {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int max = Integer.MIN_VALUE, maxIndex = -1;
		for (int i = 1; i <= 5; i++) {
			int sum = 0;
			for (int j = 0; j < 4; j++)
				sum += scan.nextInt();
			if (max < sum) {
				max = sum;
				maxIndex = i;
			}
		}
		System.out.printf("%d %d", maxIndex, max);
		scan.close();
	}
}
