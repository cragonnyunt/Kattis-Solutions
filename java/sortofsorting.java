import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class sortofsorting {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int count;
		while ((count = scan.nextInt()) != 0) {
			String[] names = new String[count];
			for (int i = 0; i < count; i++)
				names[i] = scan.next();
			Arrays.sort(names, new Comparator<String>() {
				public int compare(String s1, String s2) {
					return s1.substring(0, 2).compareTo(s2.substring(0, 2));
				}
			});
			for (String n : names)
				System.out.println(n);
			System.out.println();
		}
		scan.close();
	}
}
