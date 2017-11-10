import java.util.Scanner;

public class whatdoesthefoxsay {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		scan.nextLine();
		while (T-- > 0) {
			String[] sounds = scan.nextLine().split(" ");
			String animal_sound;
			while (!(animal_sound = scan.nextLine()).equals("what does the fox say?")) {
				animal_sound = animal_sound.split(" ")[2];
				for(int i = 0; i < sounds.length; i++)
					if(sounds[i].equals(animal_sound))
						sounds[i] = "";
			}
			for(String s : sounds)
				if(!s.isEmpty())
					System.out.print(s + " ");
			System.out.println();
		}
		scan.close();
	}
}
