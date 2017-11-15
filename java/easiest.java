import java.util.Scanner;

public class easiest {
	static int sumOfDigits(int num) {
		int sum = 0;
		while (num > 0) {
			sum += num % 10;
			num /= 10;
		}
		return sum;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N;
		while ((N = scan.nextInt()) != 0) {
			int result = -1;
			int sum = sumOfDigits(N);
			for (int i = 11; i < Integer.MAX_VALUE; i++)
				if (sum == sumOfDigits(N * i)) {
					result = i;
					break;
				}
			System.out.println(result);
		}
		scan.close();
	}
}
