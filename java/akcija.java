import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class akcija {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		Integer[] c = new Integer[N];
		for (int i = 0; i < N; i++)
			c[i] = scan.nextInt();
		Arrays.sort(c, new Comparator<Integer>() {
			public int compare(Integer o1, Integer o2) {
				return o2.compareTo(o1);
			}
		});
		int price = 0;
		for(int i = 0; i < N; i++)
			if((i + 1) % 3 != 0)
				price += c[i];
		System.out.println(price);
		scan.close();
	}
}
