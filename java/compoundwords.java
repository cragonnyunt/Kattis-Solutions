import java.util.ArrayList;
import java.util.Scanner;
import java.util.TreeSet;

public class compoundwords {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		ArrayList<String> words = new ArrayList<>();
		while (scan.hasNext())
			words.add(scan.next());
		TreeSet<String> compounds = new TreeSet<>();
		for (int i = 0; i < words.size(); i++)
			for (int j = 0; j < words.size(); j++)
				if (i != j)
					compounds.add(words.get(i) + words.get(j));
		for(String s : compounds)
			System.out.println(s);
		scan.close();
	}
}
