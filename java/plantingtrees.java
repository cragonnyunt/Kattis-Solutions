import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class plantingtrees {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		Integer[] days = new Integer[N];
		for (int i = 0; i < N; i++)
			days[i] = scan.nextInt();
		Arrays.sort(days, new Comparator<Integer>() {
			public int compare(Integer o1, Integer o2) {
				return o2.compareTo(o1);
			}
		});
		int party = 0;
		for (int i = 0; i < days.length; i++)
			party = Math.max(party, days[i] + i + 1);
		System.out.println(party + 1);
		scan.close();
	}
}
