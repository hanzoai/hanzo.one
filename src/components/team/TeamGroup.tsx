import { Box, Grid, H3 } from '@/gui'
import { LucideIcon } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

interface TeamGroupProps {
  title: string;
  members: TeamMember[];
  onMemberClick?: (member: TeamMember) => void;
}

const TeamGroup = ({ title, members, onMemberClick }: TeamGroupProps) => {
  return (
    <Box marginBottom={64}>
      <H3 fontSize="var(--text-2xl)" lineHeight="var(--leading-2xl)" fontWeight="700" marginBottom={24} textAlign="center" color="var(--foreground)">{title}</H3>
      <Grid display="grid" gridTemplateColumns="repeat(1, minmax(0, 1fr))" gap={24} $sm={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }} $lg={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} $xl={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
        {members.map((member) => (
          <TeamMemberCard 
            key={member.name} 
            {...member} 
            onClick={onMemberClick ? () => onMemberClick(member) : undefined}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TeamGroup;