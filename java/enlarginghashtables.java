import java.util.Scanner;

public class enlarginghashtables {
	static boolean isPrime(int n) {
		if (n == 2)
			return true;
		if (n % 2 == 0)
			return false;
		for (int i = 3; i <= Math.sqrt(n); i += 2)
			if (n % i == 0)
				return false;
		return true;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		while ((n = scan.nextInt()) != 0) {
			int nextPrime;
			int d_n = n * 2;
			while (true)
				if (isPrime(++d_n)) {
					nextPrime = d_n;
					break;
				}
			System.out.println(nextPrime + (!isPrime(n) ? " (" + n + " is not prime)" : ""));
		}
		scan.close()
	}
}
