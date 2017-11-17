import java.util.Scanner;

public class chopin {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int cases = 1;
		while (scan.hasNext()) {
			String note = scan.next();
			String tonality = scan.next();
			if (note.length() == 1)
				System.out.println("Case " + cases++ + ": UNIQUE");
			else {
				int inc = note.charAt(1) == '#' ? 1 : -1;
				char ch = (char) ((note.charAt(0) + inc) % ('G' + 1));
				if (note.charAt(0) == 'G' && inc == 1)
					ch = 'A';
				else if (note.charAt(0) == 'A' && inc == -1)
					ch = 'G';
				System.out.printf("Case %d: %c%c %s%n", cases++, ch, (note.charAt(1) == '#' ? 'b' : '#'), tonality);
			}
		}
		scan.close();
	}
}
