import {
	ArrowSquareOut,
	Buildings,
	GithubLogo,
	UsersThree,
} from 'phosphor-react'
import { GithubDetails, Header, Tags, Wrapper } from './styles'

export const Home = () => {
	return (
		<Wrapper>
			<GithubDetails>
				<img
					src="https://avatars.githubusercontent.com/u/38632474?v=4"
					alt=""
				/>

				<div>
					<Header>
						<h2>Cleyton vinicius</h2>
						<a href="">
							Github
							<ArrowSquareOut size={16} />
						</a>
					</Header>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
						nihil ad id, vero sunt quos voluptatem, architecto magnam quas quod
						consequuntur sed. Aperiam nihil impedit unde laboriosam tempora, et
						atque.
					</p>

					<Tags>
						<span>
							<GithubLogo size={18} weight="fill" />
							vinisad
						</span>
						<span>
							<Buildings size={18} weight="fill" />
							londrisoft
						</span>
						<span>
							<UsersThree size={18} weight="fill" />
							32 seguidores
						</span>
					</Tags>
				</div>
			</GithubDetails>
		</Wrapper>
	)
}
