import java.util.Scanner;

public class rationalsequence {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int P = scan.nextInt();
		while (P-- > 0) {
			int K = scan.nextInt();
			String[] p_q = scan.next().split("/");
			int p = Integer.parseInt(p_q[0]);
			int q = Integer.parseInt(p_q[1]);
			System.out.print(K + " ");
			if (q == 1)
				System.out.println(1 + "/" + (p + 1));
			else if (q == 2)
				System.out.println(q + "/" + p);
			else if (p < q)
				System.out.println(q + "/" + (q - p));
			else
				System.out.println(q + "/" + (q * (1 + p / q) - (p % q)));
		}
		scan.close();
	}
}
