import java.util.Scanner;

public class zamka {
	static int getSum(int value) {
		int sum = 0;
		while (value > 0) {
			sum += value % 10;
			value /= 10;
		}
		return sum;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int L = scan.nextInt();
		int D = scan.nextInt();
		int X = scan.nextInt();
		int N = 0;
		int M = 0;
		for (int i = L; i <= D; i++)
			if (getSum(i) == X) {
				N = i;
				break;
			}
		for (int i = D; i >= L; i--)
			if (getSum(i) == X) {
				M = i;
				break;
			}
		System.out.printf("%d%n%d", N, M);
		scan.close();
	}
}
