import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class lineup {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		String[] names = new String[N];
		String[] names_asc = new String[N];
		String[] names_desc = new String[N];
		for (int i = 0; i < N; i++)
			names[i] = names_asc[i] = names_desc[i] = scan.next();
		Arrays.sort(names_asc);
		Arrays.sort(names_desc, new Comparator<String>() {
			public int compare(String o1, String o2) {
				return o2.compareTo(o1);
			}
		});
		boolean isAsc = true, isDesc = true;
		for (int i = 0; i < N; i++) {
			if (isAsc && !names[i].equals(names_asc[i]))
				isAsc = false;
			if (isDesc && !names[i].equals(names_desc[i]))
				isDesc = false;
			if (!isAsc && !isDesc) {
				break;
			}
		}
		if (isAsc)
			System.out.println("INCREASING");
		else if (isDesc)
			System.out.println("DECREASING");
		else
			System.out.println("NEITHER");
		scan.close();
	}
}
