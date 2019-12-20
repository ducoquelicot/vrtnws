"""create datasets db

Revision ID: 9f4221e2044f
Revises: 
Create Date: 2019-07-30 21:32:00.207016

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9f4221e2044f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        'datasets',
        sa.Column('id', sa.Integer(), primary_key=True, nullable=False),
        sa.Column('name', sa.String(length=200), nullable=True),
        sa.Column('area', sa.String(length=50), nullable=True),
        sa.Column('source', sa.String(length=50), nullable=True),
        sa.Column('file_type', sa.String(length=50), nullable=True),
        sa.Column('link', sa.Text(), nullable=True),
        sa.Column('dictionary', sa.Boolean(), nullable=True),
        sa.Column('date_obtained', sa.String(length=50), nullable=True),
        sa.Column('clean', sa.Boolean(), nullable=True),
        sa.Column('tags', sa.String(length=255), nullable=True),
        sa.Column('file', sa.LargeBinary(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    op.create_index(op.f('ix_datasets_name'), 'datasets', ['name'], unique=False)
    op.create_index(op.f('ix_datasets_area'), 'datasets', ['area'], unique=False)
    op.create_index(op.f('ix_datasets_tags'), 'datasets', ['tags'], unique=False)


def downgrade():
    op.drop_table('datasets')
