import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

public class synchronizinglists {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n;
		while ((n = scan.nextInt()) != 0) {
			int[] first = new int[n];
			int[] first_sorted = new int[n];
			int[] second = new int[n];
			for (int i = 0; i < n; i++)
				first[i] = first_sorted[i] = scan.nextInt();
			for (int i = 0; i < n; i++)
				second[i] = scan.nextInt();
			Arrays.sort(first_sorted);
			Arrays.sort(second);
			HashMap<Integer, Integer> sync = new HashMap<>(n);
			for (int i = 0; i < n; i++)
				sync.put(first_sorted[i], second[i]);
			for (int i : first)
				System.out.println(sync.get(i));
			System.out.println();
		}
		scan.close();
	}
}
