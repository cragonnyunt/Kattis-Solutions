import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class shopaholic {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		Long[] price = new Long[n];
		while (n-- > 0)
			price[price.length - n - 1] = scan.nextLong();
		Arrays.sort(price, new Comparator<Long>() {
			public int compare(Long o1, Long o2) {
				return o2.compareTo(o1);
			}
		});
		long discount = 0L;
		for (int i = 2; i < price.length; i += 3)
			discount += price[i];
		System.out.println(discount);
		scan.close();
	}
}
