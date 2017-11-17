import java.util.ArrayList;
import java.util.Scanner;

public class rollcall {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		ArrayList<Name> roll = new ArrayList<>();
		while (scan.hasNext()) {
			String first_name = scan.next();
			String last_name = scan.next();
			roll.add(new Name(first_name, last_name));
		}
		roll.sort(null);
		for (int i = 0; i < roll.size(); i++) {
			boolean hasSameFirstName = false;
			for (int j = 0; j < roll.size(); j++) {
				if (j != i && roll.get(i).first_name.equals(roll.get(j).first_name)) {
					hasSameFirstName = true;
					break;
				}
			}
			if (!hasSameFirstName)
				roll.get(i).last_name = "";
		}
		for (Name n : roll)
			System.out.printf("%s %s%n", n.first_name, n.last_name);
		scan.close();
	}
}

class Name implements Comparable<Name> {
	public String first_name, last_name;

	public Name(String first_name, String last_name) {
		this.first_name = first_name;
		this.last_name = last_name;
	}

	public int compareTo(Name o) {
		if (!last_name.equals(o.last_name))
			return last_name.compareTo(o.last_name);
		else
			return first_name.compareTo(o.first_name);
	}
}
