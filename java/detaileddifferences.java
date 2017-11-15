import java.util.Scanner;

public class detaileddifferences {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt();
		while (n-- > 0) {
			String t1 = scan.next();
			String t2 = scan.next();
			System.out.println(t1);
			System.out.println(t2);
			StringBuilder str = new StringBuilder(t1.length());
			for (int i = 0; i < t1.length(); i++)
				if (t1.charAt(i) == t2.charAt(i))
					str.append('.');
				else
					str.append('*');
			System.out.println(str);
			System.out.println();
		}
		scan.close();
	}
}
