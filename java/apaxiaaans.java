import java.util.Scanner;

public class apaxiaaans {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String name = scan.next();
		StringBuilder sb = new StringBuilder(name.length());
		for (char c : name.toCharArray())
			if (sb.length() == 0 || sb.charAt(sb.length() - 1) != c)
				sb.append(c);
		System.out.println(sb);
		scan.close();
	}
}
