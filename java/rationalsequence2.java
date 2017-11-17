import java.util.Scanner;

public class rationalsequence2 {
	static int getN(int p, int q) {
		if (p < q)
			if (p == 1)
				return (int) Math.pow(2, q - 1);
			else
				return getN(p, q % p) * (int) Math.pow(2, q / p);
		else if (p > q)
			return getN(p - q, p) + 1;
		else
			return 1;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int P = scan.nextInt();
		while (P-- > 0) {
			int K = scan.nextInt();
			String[] n = scan.next().split("/");
			int p = Integer.parseInt(n[0]);
			int q = Integer.parseInt(n[1]);
			System.out.printf("%d %d", K, getN(p, q));
		}
		scan.close();
	}
}
