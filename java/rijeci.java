import java.util.Scanner;

public class rijeci {
	static int[] fibo = new int[46];
	static {
		fibo[1] = 1;
		for (int i = 2; i < fibo.length; i++)
			fibo[i] = fibo[i - 1] + fibo[i - 2];
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int i = scan.nextInt();
		System.out.printf("%d %d", fibo[i - 1], fibo[i]);
		scan.close();
	}
}
