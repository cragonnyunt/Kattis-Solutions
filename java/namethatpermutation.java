import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Scanner;

public class namethatpermutation {
	static BigInteger[] factorials = new BigInteger[50];
	static {
		factorials[0] = new BigInteger("1");
		for (int i = 1; i < 50; i++)
			factorials[i] = factorials[i - 1].multiply(new BigInteger(String.valueOf(i + 1)));
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextInt()) {
			int n = scan.nextInt();
			BigInteger k = new BigInteger(scan.next());
			if (n == 1) {
				System.out.println("1");
				continue;
			}
			BigInteger fact_n = factorials[n - 2];
			StringBuilder sb = new StringBuilder();
			ArrayList<Integer> permutation = new ArrayList<>();
			for(int i = 1; i <= n; i++)
				permutation.add(i);
			if (k.equals(BigInteger.ZERO)) {
				for(int i : permutation)
					sb.append(i + " ");
			} else if (k.equals(BigInteger.ONE)) {
				int tmp = permutation.get(permutation.size() - 1);
				permutation.set(permutation.size() - 1, permutation.get(permutation.size() - 2));
				permutation.set(permutation.size() - 2, tmp);
				for(int i : permutation)
					sb.append(i + " ");
			} else {
				BigInteger K = new BigInteger(String.valueOf(k));
				do {
					int count = 0;
					while(K.compareTo(fact_n) >= 0) {
						K = K.subtract(fact_n);
						count++;
					}					
					sb.append(permutation.get(count) + " ");
					permutation.remove(count);
					K = K.divideAndRemainder(fact_n)[1];
					n--;
					if(n > 1)
						fact_n = factorials[n - 2];
				} while(permutation.size() != 0);
			}
			System.out.println(sb);
		}
		scan.close();
	}
}
